import { Form } from 'vee-validate';
import { ref } from 'vue';


export default function(send: (...args: any[]) => any) {
  const formRef = ref<InstanceType<typeof Form> | null>(null);

  async function submit() {
    if(!formRef.value) return;
    const { valid } = await formRef.value.validate();
    if(!valid) return;
    send();
  }

  return {
    formRef,
    submit,
  }
}
