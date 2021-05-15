import admin from "firebase-admin";

import { rejectRequest, getRequestsForGroup, getGroup } from "../db";

export const rejectRequestRoute = {
  method: "post",
  path: "/groups/:groupId/requests/:requestId/reject",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { groupId, requestId } = req.params;
    const group = await getGroup(groupId);
    const user = await admin.auth().verifyIdToken(token);

    if (!user || group.ownerId !== user.user_id) {
      return res.status(401).json({ message: "User in not owner of group" });
    }

    await rejectRequest(requestId);
    const updatedRequests = getRequestsForGroup(groupId);

    res.status(200).json(updatedRequests);
  },
};
