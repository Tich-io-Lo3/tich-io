export const checkStatus = (response) => {
    if (!response.ok) throw response;
    return response.json();
};