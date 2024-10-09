import useHttp from '@/shared/api/useHttp';
import { ref, watch } from 'vue';

export default function() {
  const sections = ref<ProgramSection[]>([]);
  const activeSection = ref<ProgramSection |  null>(null);
  const programs = ref<Program[] | null>();

  const { http } = useHttp();

  async function getSections() {
    const { data } = await http.get<ProgramSection[]>('programs_sections.php');
    sections.value = data;
    if(sections.value.length > 0) activeSection.value = sections.value[0];
  }

  async function getPrograms(sectionId: string) {
    const { data } = await http.get<Program[]>('programs_elements.php', {
      params: { id: sectionId },
    });
    programs.value = data;
  }

  watch(activeSection, (sec) => {
    if(sec) getPrograms(sec.id);
  });

  return {
    sections,
    programs,
    activeSection,
    getSections,
    getPrograms,
  }
}

export interface ProgramSection {
  id: string,
  name: string,
}

export interface Program {
  name:  string,
  id:    string,
  price: string,
  days:  string,
  text:  string,
  img:   string,
}
