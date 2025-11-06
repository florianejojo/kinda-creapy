import NavigationService from "./navigation"

export class HttpException extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = "Invalid credentials") {
    super(message, 401)
  }
}

export function CatchErrors(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args)
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        NavigationService.navigateToLogin("session=expired")
      }
      return { success: false, error: (error as Error).message }
    }
  }

  return descriptor
}
