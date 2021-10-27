import { shallowMount, mount, flushPromises } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld";
import { useRouter } from "vue-router";
const mockPush = jest.fn();
jest.mock("vue-router", () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}));
describe("HelloWorld组件测试", () => {
  it("1. 测试props title传值渲染是否正确", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        title: "123",
      },
    });
    expect(wrapper.vm.title).toBe("123");
    expect(wrapper.find('[data-test="title"]').text()).toBe("123");
  });
  it("2. 测试点击标题, 是否有正确emit更新title事件", async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find('[data-test="title"]').trigger("click");
    expect(wrapper.emitted("update:title")).toBeTruthy();
    expect(wrapper.emitted("update:title")[0]).toEqual(["改变标题"]);
  });
  it("3. 测试点击去登录按钮路由跳转是否正确触发", async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.find('[data-test="loginBtn"]').trigger("click");
    expect(mockPush).toHaveBeenCalledWith('/login')
  });
});
