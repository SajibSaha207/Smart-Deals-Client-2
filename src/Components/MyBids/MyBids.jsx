import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {

    const { user } = use(AuthContext)
    const [bids, setBids] = useState([])
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/bids?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setBids(data)
            })
        }
    },[user?.email])

    const handleDeleteBids =(_id)=>{
       const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/bids/${_id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {

      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

    });

  } else if (result.dismiss === Swal.DismissReason.cancel) {

    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });

  }
});
    }
    return (
        <div>
            <h3>My Bids: {bids?.length}</h3>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        SL NO.
        </th>
        <th>Product</th>
        <th>Seller</th>
        <th>Bid Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
    {
        bids.map((bid, index) =>   <tr key={bid._id}>
        <td>
        {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
         
        </td>
        <td>{bid.bid_price}</td>
        <td>{bid.stuatu === 'pending' ? <div className="badge badge-warning">{bid.status}</div> :
        <div className="badge badge-success">{bid.status}</div> 
    }
        </td>
        <th>
          <button onClick={() =>handleDeleteBids (bid._id)} className="btn  btn-outline">Remove Bids</button>
        </th>
      </tr>)
    }
    
    </tbody>
 
  </table>
</div>
        </div>
    );
};

export default MyBids;