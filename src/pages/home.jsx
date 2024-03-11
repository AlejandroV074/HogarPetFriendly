import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Icon } from "@iconify/react";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 lg:w-10/12">
              <div className="flex flex-col lg:flex-row items-center mb-6">
                {" "}
                <Typography
                  variant="h1"
                  className="text-5xl text-left lg:mb-0 lg:mr-6"
                >
                  Regálale un buen futuro a tu peludo amigo
                </Typography>
                <img
                  src="/img/cat.png"
                  alt="Descripción de la imagen"
                  className="max-w-full h-auto ml-5"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
              <Button
                size="md"
                className="text-xl rounded-full flex items-center mx-auto lg:mx-0"
                style={{
                  backgroundColor: "rgba(255, 175, 27, 0.78)",
                  color: "#FFFFFF",
                }}
              >
                <Icon icon="icons8:cat-footprint" className="h-10 w-10 mr-2" />
                Quiero adoptar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div
            className="mt-32 flex flex-wrap items-center p-5"
            style={{
              backgroundColor: "rgba(222, 222, 222, 0.24)",
            }}
          >
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography variant="h3" className="mb-3 font-bold">
                ¿Quienes somos?
              </Typography>
              <Typography className="mb-8 font-normal text-black">
                Bienvenido al Refugio de Amor Fiel, un lugar donde la pasión por
                los animales se une con el compromiso de brindarles un hogar
                seguro y amoroso.
                <br />
                <br />
                Somos un equipo dedicado de amantes de los animales,
                comprometidos con la misión de encontrar hogares para perros y
                gatos necesitados.
              </Typography>
              <Button
                variant="filled"
                style={{
                  backgroundColor: "rgba(255, 175, 27, 0.78)",
                  color: "#FFFFFF",
                }}
              >
                Leer más
              </Button>
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-800/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="black"
                    className="mb-3 mt-2 font-bold"
                  >
                    Objetivo
                  </Typography>
                  <Typography className="font-normal text-black">
                    Nuestro objetivo es crear conciencia sobre la adopción de
                    mascotas, conectar a los animales necesitados con familias
                    amorosas y fomentar una comunidad comprometida con el
                    bienestar animal.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Testimonios">
            ¡Descubre las historias emocionantes de nuestros usuarios que
            encontraron a sus fieles amigos en nuestra plataforma! Estos
            testimonios son un testimonio del poder transformador de la adopción
            de mascotas. ¡Sumérgete en la conexión especial entre humanos y
            animales y encuentra inspiración para tu propia historia de amor!
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, description }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
