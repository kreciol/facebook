

export async function loginUser(login, password) {
    const body = new URLSearchParams({login, password}).toString();

    const response = await fetch("http://localhost:3002/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
    });

    return response.json();
}