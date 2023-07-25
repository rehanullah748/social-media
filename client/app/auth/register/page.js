import Left from "@/components/Left";
import RegisterForm from "@/components/RegisterForm";
export const metadata = {
  title: "Mygram - Register",
  description: "Hello register form",
};
const page = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 h-screen">
      <Left />
      <RegisterForm />
    </div>
  );
};

export default page;
