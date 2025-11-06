class NavigationService {
  private static navigate(url: string, params?: string): void {
    if (typeof window !== "undefined") {
      window.location.href = params ? `${url}?${params}` : url
    }
  }

  static navigateToLogin(params?: string): void {
    this.navigate("/auth/login", params)
  }
}

export default NavigationService
