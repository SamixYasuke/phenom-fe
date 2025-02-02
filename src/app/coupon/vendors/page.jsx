import CouponVendorSection from "@/components/CouponVendorSection";

const CouponVendorPage = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Vendors" },
  ];
  return (
    <section>
      <CouponVendorSection
        title="Coupon Vendors"
        description="Contact any of the vendors here."
        breadcrumbItems={breadcrumbItems}
      />
    </section>
  );
};

export default CouponVendorPage;
