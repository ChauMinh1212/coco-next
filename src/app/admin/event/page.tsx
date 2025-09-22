"use client"
import { addEvent, deleteEvent, getEvent, updateEvent } from "@/api/event/event";
import { ImageCustom } from "@/lib/components/common";
import { Add, Close, Delete, Edit } from "@mui/icons-material";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import { useEffect, useState } from "react";

interface IEvent {
    id: string;
    name: string;
    content: string;
    img: {
        url: string;
    } | null;
    from: string;
    to: string;
    sort?: number;
}

export default function AdminEventPage() {
    const [isAuth, setIsAuth] = useState(false);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<IEvent | null>(null);
    const [deletingEvent, setDeletingEvent] = useState<IEvent | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        content: '',
        from: '',
        to: '',
        img: { url: '/img/sample.webp' },
        sort: 0
    });

    useEffect(() => {
        const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
        const password = window.prompt("Vui lòng nhập mật khẩu admin:");
        if (
            password &&
            password === adminPassword
        ) {
            setIsAuth(true);
        } else {
            alert("Sai mật khẩu! Bạn không có quyền truy cập.");
            setIsAuth(false);
            window.location.href = "/";
        }
    }, []);

    useEffect(() => {
        if (isAuth) {
            getEvent().then((res) => {
                setEvents(res);
                setLoading(false);
            });
        }
    }, [isAuth]);

    const handleOpenModal = (event?: IEvent) => {
        if (event) {
            setEditingEvent(event);
            setFormData({
                name: event.name,
                content: event.content,
                from: event.from,
                to: event.to,
                img: event.img || { url: '/img/sample.webp' },
                sort: event.sort || 0
            });
        } else {
            setEditingEvent(null);
            setFormData({
                name: '',
                content: '',
                from: '',
                to: '',
                img: { url: '/img/sample.webp' },
                sort: 0
            });
        }
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditingEvent(null);
        setFormData({
            name: '',
            content: '',
            from: '',
            to: '',
            img: { url: '/img/sample.webp' },
            sort: 0
        });
    };

    const handleSubmit = async () => {
        if (editingEvent) {
            await updateEvent({ ...editingEvent, ...formData });
        } else {
            await addEvent(formData);
        }
        const newEvent = await getEvent();
        setEvents(newEvent);
        handleCloseModal();
    };

    const handleDelete = (eventId: string) => {
        const eventToDelete = events.find(event => event.id === eventId);
        if (eventToDelete) {
            setDeletingEvent(eventToDelete);
            setOpenDeleteModal(true);
        }
    };

    const confirmDelete = async () => {
        if (deletingEvent) {
            await deleteEvent(deletingEvent.id);
            const newEvent = await getEvent();
            setEvents(newEvent);
            setOpenDeleteModal(false);
            setDeletingEvent(null);
        }
    };

    const cancelDelete = () => {
        setOpenDeleteModal(false);
        setDeletingEvent(null);
    };

    if (!isAuth) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Bạn không có quyền truy cập trang này.</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-[30px] py-[30px]">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
                    Quản lý sự kiện
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                    onClick={() => handleOpenModal()}
                >
                    Thêm sự kiện mới
                </Button>
            </Box>

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" p={4}>
                    <Typography>Đang tải dữ liệu...</Typography>
                </Box>
            ) : (
                <TableContainer component={Paper} elevation={2}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#e0f7fa' }}>
                                <TableCell sx={{ fontWeight: 'bold' }}>Tên sự kiện</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Ảnh</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Thời gian</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Nội dung</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Thứ tự</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((event) => (
                                <TableRow key={event.id} hover sx={{ '&:hover': { backgroundColor: '#f1f8e9' } }}>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>
                                        <Box width={60} height={40}>
                                            <ImageCustom src={event.img?.url || "/img/sample.webp"} alt="" />
                                        </Box>
                                    </TableCell>
                                    <TableCell>{event.from} - {event.to}</TableCell>
                                    <TableCell>
                                        <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>
                                            {event.content}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{event.sort}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="warning"
                                            startIcon={<Edit />}
                                            onClick={() => handleOpenModal(event)}
                                            sx={{ mr: 1 }}
                                        >
                                            Sửa
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="error"
                                            startIcon={<Delete />}
                                            onClick={() => handleDelete(event.id)}
                                        >
                                            Xóa
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Modal tạo/sửa sự kiện */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">
                            {editingEvent ? 'Sửa sự kiện' : 'Thêm sự kiện mới'}
                        </Typography>
                        <IconButton onClick={handleCloseModal}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2} mt={1}>
                        <TextField
                            label="Tên sự kiện"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            fullWidth
                            required
                        />
                        <Box display="flex" gap={2}>
                            <TextField
                                label="Từ ngày"
                                value={formData.from}
                                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                                fullWidth
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                label="Đến ngày"
                                value={formData.to}
                                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                                fullWidth
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                        <TextField
                            label="URL ảnh"
                            value={formData.img.url}
                            onChange={(e) => setFormData({
                                ...formData,
                                img: { url: e.target.value }
                            })}
                            fullWidth
                            placeholder="/img/sample.webp"
                        />
                        <TextField
                            label="Nội dung"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            fullWidth
                            multiline
                            rows={4}
                            required
                        />
                        <TextField
                            label="Thứ tự"
                            type="number"
                            value={formData.sort}
                            onChange={(e) => setFormData({ ...formData, sort: Number(e.target.value) })}
                            fullWidth
                            required
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="inherit">
                        Hủy
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        disabled={!formData.name || !formData.content || !formData.from || !formData.to}
                    >
                        {editingEvent ? 'Cập nhật' : 'Thêm mới'}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Modal xác nhận xóa */}
            <Dialog
                open={openDeleteModal}
                onClose={cancelDelete}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" color="error">
                            Xác nhận xóa
                        </Typography>
                        <IconButton onClick={cancelDelete}>
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Box mt={1}>
                        <Typography variant="body1" gutterBottom>
                            Bạn có chắc chắn muốn xóa sự kiện này?
                        </Typography>
                        {deletingEvent && (
                            <Box mt={2} p={2} bgcolor="grey.100" borderRadius={1}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {deletingEvent.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {deletingEvent.from} - {deletingEvent.to}
                                </Typography>
                            </Box>
                        )}
                        <Typography variant="body2" color="error" mt={2}>
                            Hành động này không thể hoàn tác!
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="inherit">
                        Hủy
                    </Button>
                    <Button
                        onClick={confirmDelete}
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                    >
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
