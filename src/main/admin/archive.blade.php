<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.83.1">
    <title>Admin</title>

    {{ Html::style('css/app.css') }}
    {{ Html::style('css/admin.css') }}

</head>

<body>
    <main>
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                @include('admin.layout.sidebar')
                <div className="col d-flex flex-column h-sm-100 p-0">
                    @include('admin.layout.navbar')
                    @include('admin.layout.breadcrumb')
                    <div className="wrapper p-4 h-100">
                        <div className="card box-shadow">
                            <div className="card-header">
                                Archive List
                                <a className="btn btn-primary float-end" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Tambah Data Arsip</a>
                            </div>
                            <!-- Modal Tambah Archive -->
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalToggleLabel">Tambah Data Arsip</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <button className="btn btn-primary" data-bs-target="#Modal2" data-bs-toggle="modal" data-bs-dismiss="modal">Manual</button>
                                            <hr>
                                            <button className="btn btn-primary" data-bs-target="#Modal3" data-bs-toggle="modal" data-bs-dismiss="modal">+ File</button>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="Modal2" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="Modal2Label" tabindex="-1">
                                <div className="modal-dialog modal-dialog-scrollable ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Penambahan Data Arsip Manual</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form-row">
                                                <div className="form-group col-mb-6">
                                                    <label for="nomor-arsip" className="col-form-label">Nomor Arsip:</label>
                                                    <input type="text" className="form-control" id="nomor-arsip">
                                                </div>
                                                <div className="form-group col-mb-6">
                                                    <label for="nomor-surat" className="col-form-label">Nomor Surat:</label>
                                                    <input type="text" className="form-control" id="nomor-surat">
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label for="nama-pencipta" className="col-form-label">Nama Pencipta:</label>
                                                <input type="text" className="form-control" id="nama-pencipta">
                                            </div>
                                            <div className="mb-3">
                                                <label for="petugas-registrasi" className="col-form-label">Petugas Registrasi:</label>
                                                <input type="text" className="form-control" id="petugas-registrasi">
                                            </div>
                                            <div className="mb-3">
                                                <label for="kode-klasifikasi" className="col-form-label">Kode Klasifikasi:</label>
                                                <input type="text" className="form-control" id="kode-klasifikasi">
                                            </div>
                                            <div className="mb-3">
                                                <label for="jumlah arsip" className="col-form-label">Jumlah Arsip (Lembar):</label>
                                                <input type="number" className="form-control" id="jumlah-arsip">
                                            </div>
                                            <div className="mb-3">
                                                <label for="deskripsi-arsip" className="col-form-label">Deskripsi Arsip:</label>
                                                <textarea type="text" className="form-control" id="deskripsi-arsip"></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="Modal3" aria-hidden="true" aria-labelledby="Modal3Label" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Upload File Arsip</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div>
                                                <input type="file">
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nomor Arsip</th>
                                            <th scope="col">Nomor Surat</th>
                                            <th scope="col">Nama Pencipta Arsip</th>
                                            <th scope="col">Petugas Registrasi</th>
                                            <th scope="col">Kode Klasifikasi</th>
                                            <th scope="col">Jumlah (Lembar)</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($data->archive as $archive)
                                        <tr>
                                            <td>{{$archive->nomor_arsip}}</td>
                                            <td>{{$archive->nomor_surat}}</td>
                                            <td>{{$archive->nama_pencipta}}</td>
                                            <td>{{$archive->petugas_registrasi}}</td>
                                            <td>{{$archive->kode_klasifikasi}}</td>
                                            <td>{{$archive->jumlah_arsip}}</td>
                                            <td>
                                                <a data-bs-toggle="modal" data-bs-target="#modal_{{$loop->index}}" href="#"><i className="fas fa-edit text-success me-2 fs-5"></i></a>
                                                <i className="fas fa-trash-alt text-danger fs-5"></i>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="card-footer">
                                </div>
                            </div>
                        </div>
                    </div>

                    @include('admin.layout.footer')
                </div>
            </div>
        </div>
    
    </main>

    {{ Html::script('js/app.js') }}
</body>

</html>