export function validateInput(input: string, type: "name" | "phone"): boolean {
    if (type === "name") {
        // Проверка для имени: непустая строка, только буквы
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/; 
        return input.trim().length > 0 && nameRegex.test(input);
    } else {
        // Проверка для телефона: непустая строка, только цифры и знак +
        const phoneRegex = /^\+?\d+$/; 
        return input.trim().length > 0 && phoneRegex.test(input);
    }
}