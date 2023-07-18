import Left from "@/components/Left";

const page = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 h-screen">
      <Left />
      <div className="flex items-center justify-center h-screen">
        <div className="px-[173px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus,
          corporis delectus ab accusamus beatae veniam earum sed temporibus a
          praesentium ad assumenda, voluptas placeat rem nobis quidem, ut minus!
        </div>
      </div>
    </div>
  );
};

export default page;
