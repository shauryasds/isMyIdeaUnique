import { toast } from "sonner";

export function trackGuestUsage() {
    const limit = 3;
    let count = parseInt(localStorage.getItem('guest_uses') || '0', 10);

    if (count >= limit) {
        toast("You are not logged in. Guest usage is limited to 3 validations per day.");

        return false;
    }

    count += 1;
    localStorage.setItem('guest_uses', count.toString());
    return true;
}
