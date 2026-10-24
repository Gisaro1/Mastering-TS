type ApiSuccess = {
    status:"success";
    id:number;
    name:string;
};

type ApiError = {
    status:"failed";
    error:string;
};

type ApiResponse = ApiSuccess | ApiError
const getUserName = (obj: ApiResponse): string|null => {
    switch (obj.status) {
        case "success":
            return obj.name;
        case "failed":
            return null;
        default:{      
            const unHandled:never = obj;
            return unHandled;
        }
    }
}