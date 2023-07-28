import Left from "@/components/Left";
import LoginForm from "@/components/LoginForm";
export const metadata = {
  title: "Mygram - Login",
};
const page = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 h-screen">
      <Left />
      <LoginForm />
    </div>
  );
};

export default page;
