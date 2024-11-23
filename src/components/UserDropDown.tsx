import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from 'lucide-react';

type User = {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

type UserProps = {
    user : User;
}

const UserDropDown = ({user} : UserProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ddc" className="w-full justify-start ">
                    <Avatar className="mt-[2px]">
                        <AvatarImage src={user.avatar} alt="User avatar" />
                        <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-[1000]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Notifications</DropdownMenuItem>
                <DropdownMenuItem>Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropDown