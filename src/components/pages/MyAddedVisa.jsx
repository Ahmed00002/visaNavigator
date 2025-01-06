import { useContext, useEffect, useState } from "react";
import VisaCard from "../myVisaCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateVisa from "../UpdateVisa";
import { AuthContext } from "../contexts/contexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAddedVisa = () => {
  const [showModal, setShowModal] = useState(false);
  const [myVisa, setMyVisa] = useState([]);

  const handleUpdateModal = (id) => {
    fetch(`https://immigro.vercel.app/visas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyVisa(data);
      });
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  // handle visa update
  const updateVisa = (id, updatedData) => {
    fetch(`https://immigro.vercel.app/users/visas/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowModal(!showModal);
        if (data.modifiedCount > 0) {
          toast.success("Your visa updated successfully..!");
        }
      });
  };

  const { user } = useContext(AuthContext);
  const [userVisas, setUserVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedType, setSelectedType] = useState("All visas");

  // handle filter
  const handleFilter = (e) => {
    const selectedType = e.target.value;
    const filtered = userVisas.filter((visa) => visa.visaType === selectedType);
    setFilteredVisas(filtered);
    setSelectedType(selectedType);
  };

  // fetch all user visa
  useEffect(() => {
    fetch(`https://immigro.vercel.app/users/visas/${user.email}`)
      .then((res) => res.json())
      .then((visas) => setUserVisas(visas));
  }, [updateVisa]);

  const onDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://immigro.vercel.app/users/visas/${_id}`, {
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
      }
    });
  };
  return (
    <>
      <div className={`flex justify-between items-center center`}>
        <h1 className="text-2xl font-bold my-4">My Visas</h1>
        <select
          className={`outline-none h-10 border ${
            userVisas.length === 0 && "hidden"
          }`}
          name="filter"
          id="filter"
          onChange={handleFilter}
        >
          <option value="All visas">All visas</option>
          <option value="Student visa">Student visa</option>
          <option value="Work permit">Work Permit</option>
          <option value="Tourist visa">Tourist visa</option>
        </select>
      </div>
      <section
        className={`center mb-12 ${
          userVisas.length !== 0
            ? " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4"
            : "flex flex-col items-center min-h-screen "
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
        {selectedType === "All visas"
          ? userVisas.map((visa, idx) => (
              <VisaCard
                key={idx}
                props={{ visa, onDelete, handleUpdateModal }}
              ></VisaCard>
            ))
          : filteredVisas.map((visa, idx) => (
              <VisaCard
                key={idx}
                props={{ visa, onDelete, handleUpdateModal }}
              ></VisaCard>
            ))}
      </section>
      {showModal && <UpdateVisa props={{ myVisa, updateVisa, closeModal }} />}
    </>
  );
};

export default MyAddedVisa;
