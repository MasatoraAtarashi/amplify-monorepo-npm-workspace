import {useRouter} from "next/router";

const TestDetailPage = () => {
    const router = useRouter();
    const {test_id} = router.query
    return <div>{test_id}</div>;
}

export default TestDetailPage