import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signin } from '../actions/userActions';


function SigninScreen(props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading , userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/")
        }

        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}>
                        </input> 
                </li>
                <li>
                    <button type="submit" className="button primary">Sign in</button>
                </li>
                <li>
                    New to Raj Collection?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center" >Create your Raj Collection account</Link>
                </li>

            </ul>
        </form>
    </div>
}
export default SigninScreen;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { detailsUser, saveUserReview } from '../actions/UserActions';
// import Rating from '../components/Ratings';
// import { User_REVIEW_SAVE_RESET } from '../constants/UserConstants';

// function UserScreen(props) {
//   const [qty, setQty] = useState(1);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const UserDetails = useSelector((state) => state.UserDetails);
//   const { User, loading, error } = UserDetails;
//   const UserReviewSave = useSelector((state) => state.UserReviewSave);
//   const { success: UserSaveSuccess } = UserReviewSave;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (UserSaveSuccess) {
//       alert('Review submitted successfully.');
//       setRating(0);
//       setComment('');
//       dispatch({ type: User_REVIEW_SAVE_RESET });
//     }
//     dispatch(detailsUser(props.match.params.id));
//     return () => {
//       //
//     };
//   }, [UserSaveSuccess]);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // dispatch actions
//     dispatch(
//       saveUserReview(props.match.params.id, {
//         name: userInfo.name,
//         rating: rating,
//         comment: comment,
//       })
//     );
//   };
//   const handleAddToCart = () => {
//     props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
//   };

//   return (
//     <div>
//       <div className="back-to-result">
//         <Link to="/">Back to result</Link>
//       </div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error} </div>
//       ) : (
//         <>
//           <div className="details">
//             <div className="details-image">
//               <img src={User.image} alt="User"></img>
//             </div>
//             <div className="details-info">
//               <ul>
//                 <li>
//                   <h4>{User.name}</h4>
//                 </li>
//                 <li>
//                   <a href="#reviews">
//                     <Rating
//                       value={User.rating}
//                       text={User.numReviews + ' reviews'}
//                     />
//                   </a>
//                 </li>
//                 <li>
//                   Price: <b>${User.price}</b>
//                 </li>
//                 <li>
//                   Description:
//                   <div>{User.description}</div>
//                 </li>
//               </ul>
//             </div>
//             <div className="details-action">
//               <ul>
//                 <li>Price: {User.price}</li>
//                 <li>
//                   Status:{' '}
//                   {User.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
//                 </li>
//                 <li>
//                   Qty:{' '}
//                   <select
//                     value={qty}
//                     onChange={(e) => {
//                       setQty(e.target.value);
//                     }}
//                   >
//                     {[...Array(User.countInStock).keys()].map((x) => (
//                       <option key={x + 1} value={x + 1}>
//                         {x + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </li>
//                 <li>
//                   {User.countInStock > 0 && (
//                     <button
//                       onClick={handleAddToCart}
//                       className="button primary"
//                     >
//                       Add to Cart
//                     </button>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="content-margined">
//             <h2>Reviews</h2>
//             {!User.reviews.length && <div>There is no review</div>}
//             <ul className="review" id="reviews">
//               {User.reviews.map((review) => (
//                 <li key={review._id}>
//                   <div>{review.name}</div>
//                   <div>
//                     <Rating value={review.rating}></Rating>
//                   </div>
//                   <div>{review.createdAt.substring(0, 10)}</div>
//                   <div>{review.comment}</div>
//                 </li>
//               ))}
//               <li>
//                 <h3>Write a customer review</h3>
//                 {userInfo ? (
//                   <form onSubmit={submitHandler}>
//                     <ul className="form-container">
//                       <li>
//                         <label htmlFor="rating">Rating</label>
//                         <select
//                           name="rating"
//                           id="rating"
//                           value={rating}
//                           onChange={(e) => setRating(e.target.value)}
//                         >
//                           <option value="1">1- Poor</option>
//                           <option value="2">2- Fair</option>
//                           <option value="3">3- Good</option>
//                           <option value="4">4- Very Good</option>
//                           <option value="5">5- Excelent</option>
//                         </select>
//                       </li>
//                       <li>
//                         <label htmlFor="comment">Comment</label>
//                         <textarea
//                           name="comment"
//                           value={comment}
//                           onChange={(e) => setComment(e.target.value)}
//                         ></textarea>
//                       </li>
//                       <li>
//                         <button type="submit" className="button primary">
//                           Submit
//                         </button>
//                       </li>
//                     </ul>
//                   </form>
//                 ) : (
//                   <div>
//                     Please <Link to="/signin">Sign-in</Link> to write a review.
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// export default UserScreen;