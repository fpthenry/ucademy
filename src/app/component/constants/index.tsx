import IconComment from "../icons/IconComment";
import IconCourse from "../icons/IconCourse";
import IconExplore from "../icons/IconExplore";
import IconOders from "../icons/IconOders";
import IconStudy from "../icons/IconStudy";
import IconUsers from "../icons/IconUsers";

export const menuItems : {
    url: string;
    title: string;
    icon: React.ReactNode
}[] = [
    {
        url: "/",
        title: "khám phá",
        icon: <IconExplore className="size-5" />
    },
    {
        url: "/study",
        title: "Khu vực học tập",
        icon: <IconStudy className="size-5" />
    },
    {
        url: "/manage/course",
        title: "Quản lý khoá học",
        icon: <IconCourse className="size-5" />
    },
    {
        url: "/manage/users",
        title: "Quản lý thành viên",
        icon: <IconUsers className="size-5" />
    },
    {
        url: "/manage/oders",
        title: "Quản lý đơn hàng",
        icon: <IconOders className="size-5" />
    },
    {
        url: "/manage/comment",
        title: "Quản lý bình luận",
        icon: <IconComment className="size-5" />
    },

]
