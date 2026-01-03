import React from "react";
import ReviewPage from "./ReviewPage";

// dynamic title set
export const metadata = {
  title: 'Customer reviews'
}

export default function page() {
  return <div>
    <ReviewPage></ReviewPage>
  </div>;
}
