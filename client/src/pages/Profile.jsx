import Header from "../components/sections/Header";

const Profile = () => {
    return (
        <>
            <Header title="Profile" />
            <main className="mt-12 py-4 px-4 flex flex-col gap-3 bg-white lg:grid lg:px-8">
                <h3 className="text-lg font-bold">Profile</h3>
            </main>
        </>
    )
}

export default Profile;