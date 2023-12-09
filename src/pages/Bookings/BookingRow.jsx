

const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
    const { _id, date, services, price, img, status } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {services}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-purple-900">confirmed</span>

                        :
                        <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;