import PropTypes from "prop-types";

const Booking = ({ booking, handleDelete, handleConfirm }) => {
  return (
    <tr key={booking._id}>
      <th>
        <label>
          <button onClick={() => handleDelete(booking._id)}>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={booking.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{booking.service}</div>
          </div>
        </div>
      </td>
      <td>{booking.date}</td>
      <td>{booking.price}</td>
      <th>
        {booking?.status ? (
          <button className="btn btn-ghost btn-xs" disabled>
            Already Booked
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(booking._id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm Booking
          </button>
        )}
      </th>
    </tr>
  );
};

Booking.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleConfirm: PropTypes.func,
};

export default Booking;
