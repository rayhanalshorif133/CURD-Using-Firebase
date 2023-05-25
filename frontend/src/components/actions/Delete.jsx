
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

const { VITE_APP_API_URL } = import.meta.env;
const AlertSwal = withReactContent(Swal)

export const handleDelete = async (useId, setIsLoading, isLoading) => {
    AlertSwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`${VITE_APP_API_URL}/delete/${useId}`)
                .then((res) => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setTimeout(() => {
                        setIsLoading(!isLoading);
                    }, 1000);
                })

        } else {
            Swal.fire(
                'Cancelled!',
                'Your file is safe.',
                'error'
            )
        }
    })
};