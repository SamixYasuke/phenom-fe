import BreadCrumb from "@/components/BreadCrumb";

const CouponVendorPage = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Vendors" },
  ];
  return (
    <section>
      <BreadCrumb
        title="Coupon Vendors"
        description="Contact any of the vendors here."
        breadcrumbItems={breadcrumbItems}
      />
    </section>
  );
};

export default CouponVendorPage;
