import { TabsContentCareer } from './career';
import { TabsContentEducation } from './education';
import { TabsContentResume } from './resume';

export function TabsContentsAbout() {
  return (
    <>
      <TabsContentResume />
      <TabsContentCareer />
      <TabsContentEducation />
    </>
  );
}
