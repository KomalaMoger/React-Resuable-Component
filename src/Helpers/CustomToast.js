import { BsCheckCircle } from 'react-icons/bs'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CiWarning } from 'react-icons/ci'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Toast = (type, message) => {
    switch (type.toLowerCase()) {
        case 'success':
            return toast.success(<span style={{ color: '#12417f' }}>{message}</span>, {
                icon: <span style={{ color: 'green' }}><BsCheckCircle /></span>
            })
        case 'error':
            return toast.error(<span style={{ color: '#12417f' }}>{message}</span>, {
                icon: <span style={{ color: 'red' }}><AiOutlineCloseCircle /></span>
            })
        case 'warning':
            return toast.warning(<span style={{ color: '#12417f' }}>{message}</span>, {
                icon: <span style={{ color: 'yellow' }}><CiWarning /></span>
            })
        case 'info':
            return toast.info(<span style={{ color: '#12417f' }}>{message}</span>, {
                icon: <span style={{ color: 'blue' }}><AiOutlineInfoCircle /></span>
            })
        default:
            return toast(<span style={{ color: '#12417f' }}>{message}</span>, {

            })
    }

}
export default Toast