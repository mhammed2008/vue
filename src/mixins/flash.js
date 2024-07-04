import swal from 'sweetalert';

export default {
    methods: {
        flash(massage) {
            return swal('Success!',massage, 'success');
        }
    }
}
