import { useMemo } from "react";
import Header from "../components/sections/Header";
import { useParams } from "react-router-dom";
import UnselectedTrainingPage from "../components/sections/UnselectedTrainingPage";
import SelectedTrainingPage from "../components/sections/SelectedTrainingPage";
import { NewTrainingProvider } from '../context/NewTrainingContext';

const NewTrainingPage = () => {
  const params = useParams();
  const workoutId = useMemo(() => {
    return params.id ?? null;
  }, [params]);

  return (
    <>
      <Header title="New Training" />
      <main className="mt-12 py-4 px-6 flex flex-col gap-3 bg-white lg:grid lg:px-8">
        {workoutId ? (
          <NewTrainingProvider>
            <SelectedTrainingPage workoutId={workoutId} />
          </NewTrainingProvider>
        ) : (
          <UnselectedTrainingPage />
        )}
      </main>
    </>
  );
};




export default NewTrainingPage;
