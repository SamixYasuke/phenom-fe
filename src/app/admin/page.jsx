"use client";

import React, { useState, useEffect } from "react";
import { FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

const socialMediaOptions = [
  { name: "Twitter", icon: <FaTwitter className="text-blue-400" /> },
  { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
  { name: "Telegram", icon: <FaTelegram className="text-blue-500" /> },
];

export default function AdminPage() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [couponUrl, setCouponUrl] = useState("");
  const [selectedSocial, setSelectedSocial] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCoupon, setNewCoupon] = useState("");
  const [editingSocial, setEditingSocial] = useState(null);

  useEffect(() => {
    fetch("/api/social-links")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data))
      .catch((err) => console.error("Error fetching social links:", err));

    fetch("/api/coupons")
      .then((res) => res.json())
      .then((data) => setCouponUrl(data[0] || ""))
      .catch((err) => console.error("Error fetching coupons:", err));
  }, []);

  const addOrUpdateSocialLink = async () => {
    if (!newUrl.trim()) return;

    const method = editingSocial ? "PUT" : "POST";
    const url = editingSocial ? "/api/social-links" : "/api/social-links";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: selectedSocial, url: newUrl }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const updatedLinks = editingSocial
        ? socialLinks.map((link) =>
            link.name === editingSocial ? { ...link, url: newUrl } : link
          )
        : [...socialLinks, { name: selectedSocial, url: newUrl }];

      setSocialLinks(updatedLinks);
      setNewUrl("");
      setEditingSocial(null);
    } catch (error) {
      console.error("Error updating social link:", error);
    }
  };

  const deleteSocialLink = async (name) => {
    try {
      const response = await fetch("/api/social-links", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSocialLinks(socialLinks.filter((link) => link.name !== name));
    } catch (error) {
      console.error("Error deleting social link:", error);
    }
  };

  const startEditing = (name, url) => {
    setEditingSocial(name);
    setSelectedSocial(name);
    setNewUrl(url);
  };

  const addCoupon = async () => {
    try {
      const response = await fetch("/api/coupons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: newCoupon }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setCouponUrl(newCoupon);
      setNewCoupon("");
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  const deleteCoupon = async () => {
    try {
      const response = await fetch("/api/coupons", { method: "DELETE" });

      if (!response.ok) throw new Error("Network response was not ok");

      setCouponUrl("");
    } catch (error) {
      console.error("Error deleting coupon:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Page</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Social Links</h2>
        <div className="flex gap-2 mb-4">
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
          >
            {editingSocial ? "Update" : "Add"}
          </button>
        </div>
        <ul className="space-y-2">
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className="p-2 border rounded-lg bg-gray-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                {socialMediaOptions.find((s) => s.name === link.name)?.icon}
                <span>{link.name}</span> -
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  className="text-blue-500 underline"
                >
                  {link.url}
                </a>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(link.name, link.url)}
                  className="text-yellow-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSocialLink(link.name)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Coupon URL</h2>
        <div className="flex gap-2 mb-4">
          <input
            value={newCoupon}
            onChange={(e) => setNewCoupon(e.target.value)}
            placeholder="Enter coupon URL"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addCoupon}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add / Update
          </button>
          {couponUrl && (
            <button
              onClick={deleteCoupon}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
        {couponUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={couponUrl || "#"}
            className="p-2 border rounded-lg bg-gray-50"
          >
            {couponUrl}
          </a>
        )}
      </div>
    </div>
  );
}
