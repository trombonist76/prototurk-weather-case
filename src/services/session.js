export function saveApiKey(apiKey) {
    sessionStorage.setItem("apiKey", JSON.stringify(apiKey))
}

export function getApiKeyFromSession() {
    const apiKey = sessionStorage.getItem("apiKey")
    return JSON.parse(apiKey)
}