import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { CardCoversBigs } from "../../Cards/coversBigs";

export const SearchResults = ({ data }) => {
  const navigate = useNavigate();
  const { id } = data;

  const filter = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.containerResultsS} onClick={filter}>
      <CardCoversBigs data={data} />
    </div>
  );
};
