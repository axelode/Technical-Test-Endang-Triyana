const useLocalStorage = () => {
    const set = (key: string, value: string) => {
        localStorage.setItem(key, value);
    };

    const get = (key: string) => {
        const value = localStorage.getItem(key);

        try {
            return value ? JSON.parse(value) : null;
        } catch (error) {
            return value;
        }
    };

    return { set, get };
};

export default useLocalStorage;
