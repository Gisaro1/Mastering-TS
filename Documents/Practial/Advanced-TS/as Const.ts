const response = {
    status:"success"
} as const

function handleObj(status:"success" | "error"){}
handleObj(response.status)