import { defineComponent } from "vue";
import Task from "../../models/Task";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MyHome",
  data() {
    return {
      hideCompleted: false,
      tasks: [] as Task[],
    };
  },
  computed: {
    filteredTasks(): object {
      return this.hideCompleted
        ? this.tasks.filter((task) => !task.completed)
        : this.tasks;
    },
    completedTasks(): object {
      return this.tasks.filter((task) => task.completed);
    },
  },
  methods: {
    setTaskComplete(task: Task): void {
      this.$store.commit("completeTask", task);
    },
    deleteTask(task: Task) {
      this.$store.commit("deleteTask", task);
    },
  },
  mounted() {
    this.tasks = this.$store.state.tasks;
  },
});
