import { acceptRequestRoute } from "./acceptRequestRoute";
import { createGroupRoute } from "./createGroupRoute";
import { createMessageRoute } from "./createMessageRoute";
import { createRequestRoute } from "./createRequestRoute";
import { getAllGroupsRoute } from "./getAllGroupsRoute";
import { getGroupMessagesRoute } from "./getGroupMessagesRoute";
import { getGroupRoute } from "./getGroupRoute";
import { getJoinGroupRequestsRoute } from "./getJoinGroupRequestsRoute";
import { getUserGroupsRoute } from "./getUserGroupsRoute";
import { rejectRequestRoute } from "./rejectRequestRoute";

export const routes = [
  acceptRequestRoute,
  createGroupRoute,
  createMessageRoute,
  createRequestRoute,
  getAllGroupsRoute,
  getGroupMessagesRoute,
  getGroupRoute,
  getJoinGroupRequestsRoute,
  getUserGroupsRoute,
  rejectRequestRoute,
];
