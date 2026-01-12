import React from "react";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";

const blogs = [
  {
    id: 1,
    title: "How Microloans Help Small Businesses Grow",
    excerpt:
      "Microloans provide essential funding for small businesses to manage cash flow and expand operations.",
    date: "March 12, 2026",
    category: "Business Loans",
  },
  {
    id: 2,
    title: "Things to Know Before Applying for a Personal Loan",
    excerpt:
      "Understand interest rates, repayment terms, and eligibility before submitting a loan application.",
    date: "March 08, 2026",
    category: "Personal Finance",
  },
  {
    id: 3,
    title: "Loan Approval Process Explained",
    excerpt:
      "Learn how loan applications are reviewed, verified, and approved on the LoanLink platform.",
    date: "March 03, 2026",
    category: "Loan Process",
  },
  {
    id: 4,
    title: "Emergency Loans: When and How to Use Them",
    excerpt:
      "Emergency loans can help during urgent financial needs, but should be used responsibly.",
    date: "February 27, 2026",
    category: "Emergency Loans",
  },
];

const Blogs = () => {
  return (
    <section className="py-18 min-h-screen">
      <MyContainer>
        <div className="px-6 max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-extrabold text-text dark:text-gray-300">
              LoanLink Blog
            </h1>
            <p className="mt-4 text-text/70 dark:text-gray-300 max-w-2xl mx-auto">
              Insights, guides, and tips to help you make smarter financial and
              loan decisions.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-[#292d35] rounded-xl p-6 shadow-sm hover:shadow-md transition hover:scale-105 duration-300"
              >
                {/* Category */}
                <span className="inline-block text-sm text-primary font-medium mb-2">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{blog.excerpt}</p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300">
                  <span>{blog.date}</span>
                  <button className="text-blue-600 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Blogs;
