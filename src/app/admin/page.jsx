"use client";
import React, { useState, useEffect } from "react";
import { FaTwitter, FaWhatsapp, FaTelegram, FaSpinner } from "react-icons/fa";

const socialMediaOptions = [
  { name: "Twitter", icon: <FaTwitter className="text-blue-400" /> },
  { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
  { name: "Telegram", icon: <FaTelegram className="text-blue-500" /> },
];

export default function AdminPage() {
  // States for Social Links
  const [socialLinks, setSocialLinks] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [editingSocial, setEditingSocial] = useState(null);

  // States for Coupon URL
  const [couponUrl, setCouponUrl] = useState("");
  const [newCoupon, setNewCoupon] = useState("");

  // Loading states
  const [loadingSocial, setLoadingSocial] = useState(false);
  const [loadingCoupon, setLoadingCoupon] = useState(false);

  // Response message for feedback
  const [responseMessage, setResponseMessage] = useState("");

  // Load initial data
  useEffect(() => {
    // Load social links
    setLoadingSocial(true);
    fetch("/api/social-links")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data))
      .catch((err) => {
        console.error("Error fetching social links:", err);
        setResponseMessage("Failed to load social links.");
      })
      .finally(() => setLoadingSocial(false));

    // Load coupon URL
    setLoadingCoupon(true);
    fetch("/api/coupons")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          setCouponUrl(data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching coupon URL:", err);
        setResponseMessage("Failed to load coupon URL.");
      })
      .finally(() => setLoadingCoupon(false));
  }, []);

  // Begin editing a social link
  const startEditing = (name, url) => {
    setEditingSocial(name);
    setNewUrl(url);
    setSelectedSocial(name);
  };

  // Reset the social link form after submission or cancel
  const resetSocialForm = () => {
    setEditingSocial(null);
    setNewUrl("");
    setSelectedSocial("");
  };

  // Add or update a social link
  const addOrUpdateSocialLink = async () => {
    if (!newUrl.trim() || (!editingSocial && !selectedSocial)) {
      setResponseMessage(
        "Please select a social media option and enter a valid URL."
      );
      return;
    }

    setLoadingSocial(true);
    const method = editingSocial ? "PUT" : "POST";
    const endpoint = "/api/social-links";

    try {
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: selectedSocial, url: newUrl }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      if (editingSocial) {
        // Update existing link in state
        setSocialLinks((prev) =>
          prev.map((link) =>
            link.name === editingSocial ? { ...link, url: newUrl } : link
          )
        );
        setResponseMessage("Social link updated successfully!");
      } else {
        // Append new social link (avoid duplicate if already exists)
        setSocialLinks((prev) => [
          ...prev,
          { name: selectedSocial, url: newUrl },
        ]);
        setResponseMessage("Social link added successfully!");
      }
      resetSocialForm();
    } catch (error) {
      console.error("Error updating social link:", error);
      setResponseMessage("Failed to add/update social link.");
    } finally {
      setLoadingSocial(false);
    }
  };

  // Delete a social link
  const deleteSocialLink = async (name) => {
    setLoadingSocial(true);
    try {
      const response = await fetch("/api/social-links", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSocialLinks((prev) => prev.filter((link) => link.name !== name));
      setResponseMessage("Social link deleted successfully!");
    } catch (error) {
      console.error("Error deleting social link:", error);
      setResponseMessage("Failed to delete social link.");
    } finally {
      setLoadingSocial(false);
    }
  };

  // Add or update a coupon URL
  const addCoupon = async () => {
    if (!newCoupon.trim()) {
      setResponseMessage("Please enter a valid coupon URL.");
      return;
    }
    setLoadingCoupon(true);
    try {
      const response = await fetch("/api/coupons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: newCoupon }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setCouponUrl(newCoupon);
      setNewCoupon("");
      setResponseMessage("Coupon URL added/updated successfully!");
    } catch (error) {
      console.error("Error adding coupon:", error);
      setResponseMessage("Failed to add/update coupon URL.");
    } finally {
      setLoadingCoupon(false);
    }
  };

  // Delete the coupon URL
  const deleteCoupon = async () => {
    setLoadingCoupon(true);
    try {
      const response = await fetch("/api/coupons", { method: "DELETE" });

      if (!response.ok) throw new Error("Network response was not ok");

      setCouponUrl("");
      setResponseMessage("Coupon URL deleted successfully!");
    } catch (error) {
      console.error("Error deleting coupon:", error);
      setResponseMessage("Failed to delete coupon URL.");
    } finally {
      setLoadingCoupon(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 pt-8 md:pt-40">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
        Admin Page
      </h1>

      {/* Social Links Section */}
      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Social Links</h2>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <select
            value={selectedSocial}
            onChange={(e) => setSelectedSocial(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none"
            disabled={editingSocial !== null}
          >
            <option value="">Select</option>
            {socialMediaOptions
              .filter(
                (option) =>
                  editingSocial ||
                  !socialLinks.some((link) => link.name === option.name)
              )
              .map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select>
          <input
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="Enter social media URL"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addOrUpdateSocialLink}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={loadingSocial}
          >
            {loadingSocial ? (
              <FaSpinner className="animate-spin" />
            ) : editingSocial ? (
              "Update"
            ) : (
              "Add"
            )}
          </button>
        </div>
        {responseMessage && (
          <div className="text-center text-green-500 mb-4">
            {responseMessage}
          </div>
        )}
        <ul className="space-y-2">
          {socialLinks.map((link) => {
            const icon = socialMediaOptions.find(
              (option) => option.name === link.name
            )?.icon;
            return (
              <li
                key={link.name}
                className="p-2 border rounded-lg bg-gray-50 flex flex-col sm:flex-row items-center justify-between"
              >
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  {icon}
                  <span>{link.name}</span> -{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                    className="text-blue-500 underline text-center"
                  >
                    {link.url}
                  </a>
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => startEditing(link.name, link.url)}
                    className="text-yellow-500 hover:underline"
                    disabled={loadingSocial}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSocialLink(link.name)}
                    className="text-red-500 hover:underline"
                    disabled={loadingSocial}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Coupon URL Section */}
      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md mt-4 sm:mt-6">
        <h2 className="text-xl font-semibold mb-4">Coupon URL</h2>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            value={newCoupon}
            onChange={(e) => setNewCoupon(e.target.value)}
            placeholder="Enter coupon URL"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addCoupon}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            disabled={loadingCoupon}
          >
            {loadingCoupon ? (
              <FaSpinner className="animate-spin" />
            ) : (
              "Add / Update"
            )}
          </button>
          {couponUrl && (
            <button
              onClick={deleteCoupon}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              disabled={loadingCoupon}
            >
              Delete
            </button>
          )}
        </div>
        {couponUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={couponUrl}
            className="p-2 border rounded-lg bg-gray-50 block text-center sm:text-left underline text-blue-500"
          >
            {couponUrl}
          </a>
        )}
      </div>
    </div>
  );
}
