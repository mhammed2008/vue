import swal from "sweetalert";

export function useFlash() {
    function flash(title,massage, level= 'success') {
        return swal(title,massage, level);
    }

    return { flash };
}