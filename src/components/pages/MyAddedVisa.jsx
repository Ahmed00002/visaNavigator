import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/contexts";
import VisaCard from "../myVisaCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const [userVisas, setUserVisas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users/visas/${user.email}`)
      .then((res) => res.json())
      .then((visas) => setUserVisas(visas));
  }, []);

  const onDelete = (_id) => {
    fetch(`http://localhost:5000/users/visas/${_id}`, {
      method: "DELETE",
    }).then((res) => {
      Swal.fire({
        title: "Successful..!",
        text: "Visa deleted successfully",
        icon: "success",
      });
      const remained = userVisas.filter((visa) => visa._id !== _id);
      setUserVisas(remained);
    });
  };
  return (
    <>
      <section
        className={`center ${
          userVisas.length !== 0
            ? " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
            : "flex flex-col items-center min-h-screen"
        } `}
      >
        {userVisas.length === 0 && (
          <>
            <p className="text-xl font-medium text-gray-400 mt-12">
              There are no visas added by you. Wanna add? click the below button
              to add
            </p>
            <Link to={"/visa/add"}>
              <button className="btn theme-btnPrimary px-4 py-2 rounded-full mt-4">
                Add Visa
              </button>
            </Link>
          </>
        )}
        {userVisas.map((visa, idx) => (
          <VisaCard key={idx} props={{ visa, onDelete }}></VisaCard>
        ))}
      </section>
    </>
  );
};

export default MyAddedVisa;
