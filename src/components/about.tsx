import { FC } from "react";

export const About: FC = () => {

  return (
    <section className="flex flex-col text-[#313639] bg-[#f2f2f2] pt-10 pb-20 px-8 text-xl lg:2xl">
      <div className="flex lg:flex-row flex-auto mx-auto">
        <p className="text-center max-w-5xl tracking-tight text-2xl">
          Welcome to Edith & Victor Family Childcare, where we provide high-quality childcare services for families with young children.
          Edith and Victor have a passion for creating a nurturing and stimulating environment for children.
        </p>
        <p className="text-center max-w-5xl tracking-tight text-2xl">
          With years of experience in childcare and education, our team is dedicated to ensuring that every child in our care receives individual attention and support to help them grow and develop to their fullest potential.
        </p>
      </div>
    </section>
  );
}