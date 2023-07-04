import { useEffect } from "react";
import { CategoryContainer } from "./Category.style";
import { IoIosCloseCircle } from "react-icons/io";
import { useGetGenre } from "../../hooks/useGetGenre";
const Category = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
}: any) => {
  const {
    data: genreData,
    isError: genreError,
    isFetching: genreFetching,
    isLoading: genreLoading,
  } = useGetGenre(type);

  useEffect(() => {
    setGenres(genreData?.genres);
  }, [genreData]);

  const handleAddGenre = (genre: any) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres?.filter((g: any) => g?.id !== genre?.id));
  };

  const handleRemoveGenre = (genre: any) => {
    setSelectedGenres(
      selectedGenres.filter((selected: any) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };

  return (
    <>
      {selectedGenres.map((genre: any) => (
        <CategoryContainer
          key={genre?.id}
          onClick={() => handleRemoveGenre(genre)}
        >
          {genre?.name}
          <IoIosCloseCircle
            size={22}
            style={{
              marginLeft: "5px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          />
        </CategoryContainer>
      ))}
      {genres?.map((genre: any) => (
        <CategoryContainer
          key={genre?.id}
          onClick={() => handleAddGenre(genre)}
        >
          {genre?.name}
        </CategoryContainer>
      ))}
    </>
  );
};

export default Category;
