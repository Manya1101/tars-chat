"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export default function SaveUser() {

const { user } = useUser();

const createUser = useMutation(api.users.createUser);

useEffect(() => {

if (!user) return;

createUser({

name: user.fullName || "",

email: user.primaryEmailAddress?.emailAddress || "",

image: user.imageUrl,

clerkId: user.id,

});

}, [user]);

return null;

}