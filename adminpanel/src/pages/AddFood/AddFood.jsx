import { assets } from '../../assets/assets';
import React, { useState } from 'react';
import axios from 'axios';
import { addFood } from '../../components/services/foodService';
import { toast } from 'react-toastify';

const AddFood = () => {
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Biryani'
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!image) {
            toast.error('Please select an image.');
            return;
        }

        try {
            await addFood(data, image);
            toast.success('Food added successfully.');
            setData({ name: '', description: '', category: 'Biryani', price: '' });
            setImage(null);
        } catch (error) {
            toast.error('Error adding food.');
        }


    }

    //   useEffect(() => {
    //     console.log(data);  testing hook
    //   }, [data]) 

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-body">
                        <h2 className="mb-4">Add Food</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img
                                        src={image ? URL.createObjectURL(image) : assets.upload}
                                        alt=""
                                        width={98}
                                    />
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}

                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder='Food name here'
                                    value={data.name}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    placeholder='Add details about the food'
                                    rows="5"
                                    value={data.description}
                                    onChange={onChangeHandler}
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select
                                    name="category"
                                    id="category"
                                    className="form-control"
                                    value={data.category}
                                    onChange={onChangeHandler}
                                >
                                    <option value="Biryani">Biryani</option>
                                    <option value="Cake">Cake</option>
                                    <option value="Burger">Burger</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rolls">Rolls</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Ice cream">Ice cream</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="form-control"
                                    placeholder='&#8377; Food Price'
                                    value={data.price}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;