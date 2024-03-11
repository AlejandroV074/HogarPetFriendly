import PropTypes from "prop-types";
import {
  Card,
  Typography,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

export function TeamCard({ img, name, description }) {
  return (
    <Card className="rounded-lg shadow-lg border shadow-gray-800/10">
      <CardHeader floated={false} className="relative h-56">
        <img alt={name} src={img} className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
          {name}
        </Typography>
        {description && (
          <Typography className="text-gray-600">"{description}"</Typography>
        )}
      </CardBody>
    </Card>
  );
}

TeamCard.defaultProps = {
  description: "",
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
