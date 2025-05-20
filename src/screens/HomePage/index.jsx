import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
    <div>
        <Outlet />
        this is a home page.create post.
        </div>
    );
}

export default HomePage;