class NavigationService {
  private static navigate(url: string, params?: string): void {
    if (typeof window !== "undefined") {
      window.location.href = params ? `${url}?${params}` : url
    }
  }

  static navigateToLogin(params?: string): void {
    this.navigate("/admin/login", params)
  }

  static navigateToAdmin(params?: string): void {
    this.navigate("/admin", params)
  }

  static navigateToMain(params?: string): void {
    this.navigate("/", params)
  }
}

export default NavigationService
