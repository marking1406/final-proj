import React, { useState } from 'react';

export default function NewAd() {
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setFormData({});
    setImagePreview(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCategoryFields = () => {
    switch (category) {
      case 'Vehicle':
        return (
          <>
            <input
              type="text"
              name="vehicle"
              placeholder="Vehicle"
              value={formData.vehicle || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={formData.model || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
              placeholder="Image"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image preview"
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
          </>
        );
      case 'Real Estate':
        return (
          <>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
             <input
              type="text"
              name="description"
              placeholder="description"
              value={formData.address || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
              placeholder="Image"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image preview"
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
          </>
        );
      case 'Furniture':
        return (
          <>
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="material"
              placeholder="Material"
              value={formData.material || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
             <input
              type="text"
              name="area"
              placeholder="Area"
              value={formData.area || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
             <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md mb-4 p-2 w-full"
              placeholder="Image"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image preview"
                className="mt-4 max-w-full h-auto rounded-md"
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Ad</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>
      <form className="space-y-4">
        {renderCategoryFields()}
        <button
          type="submit"
          className="w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
