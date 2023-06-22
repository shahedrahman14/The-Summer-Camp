import { useQuery } from '@tanstack/react-query'
import useAuth from './UseAuth';
const useSelectedClass = () => {
    const {user}=useAuth()
    const { refetch, data:selectedItem=[] } = useQuery({
        queryKey: ['selectedItem',user?.email],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
            return response.json()
        },
      })
  return[selectedItem,refetch]
};

export default useSelectedClass;