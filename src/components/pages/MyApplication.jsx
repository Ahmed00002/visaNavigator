import { useContext, useEffect, useState } from "react";
import ApplicationCard from "../ApplicationCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/contexts";
import Swal from "sweetalert2";

const MyApplication = () => {
  const [visaApplications, setVisaApplications] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/users/applications/${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisaApplications(data));
  }, []);

  const handleCancel = (id) => {
    // Database and UI logic to remove visa application
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/applications/cancel/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deleted) => {
            if (deleted.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Canceled",
                text: "Your application canceled successfully",
              });
              const remained = visaApplications.filter(
                (visa) => visa._id !== id
              );
              setVisaApplications(remained);
            }
          });
      }
    });
  };

  return (
    <section className="center mb-12 flex flex-col items-center min-h-screen">
      {/* page heading */}
      <h1 className="text-2xl text-left w-full font-bold my-4">
        My Visa Applications
      </h1>

      {/* default message if no applications found */}
      {visaApplications.length === 0 && (
        <>
          <p className="text-xl font-medium text-gray-400 mt-12">
            You didn't applied for any visas yet. Visit visa section and choose
            your favorite one to apply.
          </p>
          <Link to={"/visas"}>
            <button className="btn theme-btnPrimary px-4 py-2 rounded-full mt-4">
              Explore Visas
            </button>
          </Link>
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {visaApplications.map((visa) => (
          <ApplicationCard key={visa._id} props={{ visa, handleCancel }} />
        ))}
      </div>
    </section>
  );
};

export default MyApplication;
